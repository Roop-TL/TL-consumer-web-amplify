/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGeojson = /* GraphQL */ `
  query GetGeojson(
    $service: String!
    $version: String!
    $request: String!
    $typeName: String!
    $maxFeatures: Int
    $outputFormat: String!
    $cql_filter: String
  ) {
    getGeojson(
      service: $service
      version: $version
      request: $request
      typeName: $typeName
      maxFeatures: $maxFeatures
      outputFormat: $outputFormat
      cql_filter: $cql_filter
    )
  }
`;
export const getTlandsRec = /* GraphQL */ `
  query GetTlandsRec($PK: String!, $SK: String!) {
    getTlandsRec(PK: $PK, SK: $SK) {
      PK
      PK1
      PK2
      PK3
      SK
      SK1
      SK2
      SK3
      gid
      id
      minMaxRange {
        minprice
        maxprice
        minarea
        maxarea
      }
      itemType
      orgName
      orgLegalName
      orgShortName
      orgSlug
      orgContactDetails
      orgAddressDetails
      orgBusinessDetails
      orgBrandDetails
      orgStatus
      orgAggregates
      isVerifiedOrg
      projName
      projShortName
      projSlug
      projDescription
      projContactDetails
      projCategory
      propertyCategories
      tags
      projBrandDetails
      projStatus
      projAggregates
      projLaunchDate
      projCompletedDate
      authorities
      projGeoDataReference
      projConfiguration
      projAddress
      projArea
      photos
      videos
      views360
      virtualTours
      tlTales
      documents
      pricingConfig
      subscriptionLevel
      projVisibility
      zoneName
      zoneShortName
      zoneSlug
      zoneLaunchDate
      zoneVisibility
      plotName
      plotSlug
      plotGeoDataReference
      plotStatus
      plotAreaDetails
      plotBasePrice
      plotPrice
      plotFacing
      plotConfiguration
      plotLatestTransaction
      ownershipType
      ownershipPercentage
      enquiryDate
      enquiryDesc
      enquiryFirstName
      enquiryLastName
      enquiryPhone
      enquiryEmail
      enquiryConsentDeatils
      enquiryStatus
      enquiryType
      userFirstName
      userLaststName
      userEmail
      userPhone
      userVisibility
      userCognitoID
      userConsentDeatils
    }
  }
`;
export const searchTlands = /* GraphQL */ `
  query SearchTlands($query: AWSJSON) {
    searchTlands(query: $query) {
      PK
      PK1
      PK2
      PK3
      SK
      SK1
      SK2
      SK3
      gid
      id
      minMaxRange {
        minprice
        maxprice
        minarea
        maxarea
      }
      itemType
      orgName
      orgLegalName
      orgShortName
      orgSlug
      orgContactDetails
      orgAddressDetails
      orgBusinessDetails
      orgBrandDetails
      orgStatus
      orgAggregates
      isVerifiedOrg
      projName
      projShortName
      projSlug
      projDescription
      projContactDetails
      projCategory
      propertyCategories
      tags
      projBrandDetails
      projStatus
      projAggregates
      projLaunchDate
      projCompletedDate
      authorities
      projGeoDataReference
      projConfiguration
      projAddress
      projArea
      photos
      videos
      views360
      virtualTours
      tlTales
      documents
      pricingConfig
      subscriptionLevel
      projVisibility
      zoneName
      zoneShortName
      zoneSlug
      zoneLaunchDate
      zoneVisibility
      plotName
      plotSlug
      plotGeoDataReference
      plotStatus
      plotAreaDetails
      plotBasePrice
      plotPrice
      plotFacing
      plotConfiguration
      plotLatestTransaction
      ownershipType
      ownershipPercentage
      enquiryDate
      enquiryDesc
      enquiryFirstName
      enquiryLastName
      enquiryPhone
      enquiryEmail
      enquiryConsentDeatils
      enquiryStatus
      enquiryType
      userFirstName
      userLaststName
      userEmail
      userPhone
      userVisibility
      userCognitoID
      userConsentDeatils
    }
  }
`;
export const searchOnMapOld = /* GraphQL */ `
  query SearchOnMapOld($searchType: String, $query: MapQueryInput) {
    searchOnMapOld(searchType: $searchType, query: $query) {
      data {
        PK
        PK1
        PK2
        PK3
        SK
        SK1
        SK2
        SK3
        gid
        id
        minMaxRange {
          minprice
          maxprice
          minarea
          maxarea
        }
        itemType
        orgName
        orgLegalName
        orgShortName
        orgSlug
        orgContactDetails
        orgAddressDetails
        orgBusinessDetails
        orgBrandDetails
        orgStatus
        orgAggregates
        isVerifiedOrg
        projName
        projShortName
        projSlug
        projDescription
        projContactDetails
        projCategory
        propertyCategories
        tags
        projBrandDetails
        projStatus
        projAggregates
        projLaunchDate
        projCompletedDate
        authorities
        projGeoDataReference
        projConfiguration
        projAddress
        projArea
        photos
        videos
        views360
        virtualTours
        tlTales
        documents
        pricingConfig
        subscriptionLevel
        projVisibility
        zoneName
        zoneShortName
        zoneSlug
        zoneLaunchDate
        zoneVisibility
        plotName
        plotSlug
        plotGeoDataReference
        plotStatus
        plotAreaDetails
        plotBasePrice
        plotPrice
        plotFacing
        plotConfiguration
        plotLatestTransaction
        ownershipType
        ownershipPercentage
        enquiryDate
        enquiryDesc
        enquiryFirstName
        enquiryLastName
        enquiryPhone
        enquiryEmail
        enquiryConsentDeatils
        enquiryStatus
        enquiryType
        userFirstName
        userLaststName
        userEmail
        userPhone
        userVisibility
        userCognitoID
        userConsentDeatils
      }
      aggregations
    }
  }
`;
export const searchOnMap = /* GraphQL */ `
  query SearchOnMap($searchType: String, $query: MapQueryInput) {
    searchOnMap(searchType: $searchType, query: $query) {
      data {
        PK
        PK1
        PK2
        PK3
        SK
        SK1
        SK2
        SK3
        gid
        id
        minMaxRange {
          minprice
          maxprice
          minarea
          maxarea
        }
        itemType
        orgName
        orgLegalName
        orgShortName
        orgSlug
        orgContactDetails
        orgAddressDetails
        orgBusinessDetails
        orgBrandDetails
        orgStatus
        orgAggregates
        isVerifiedOrg
        projName
        projShortName
        projSlug
        projDescription
        projContactDetails
        projCategory
        propertyCategories
        tags
        projBrandDetails
        projStatus
        projAggregates
        projLaunchDate
        projCompletedDate
        authorities
        projGeoDataReference
        projConfiguration
        projAddress
        projArea
        photos
        videos
        views360
        virtualTours
        tlTales
        documents
        pricingConfig
        subscriptionLevel
        projVisibility
        zoneName
        zoneShortName
        zoneSlug
        zoneLaunchDate
        zoneVisibility
        plotName
        plotSlug
        plotGeoDataReference
        plotStatus
        plotAreaDetails
        plotBasePrice
        plotPrice
        plotFacing
        plotConfiguration
        plotLatestTransaction
        ownershipType
        ownershipPercentage
        enquiryDate
        enquiryDesc
        enquiryFirstName
        enquiryLastName
        enquiryPhone
        enquiryEmail
        enquiryConsentDeatils
        enquiryStatus
        enquiryType
        userFirstName
        userLaststName
        userEmail
        userPhone
        userVisibility
        userCognitoID
        userConsentDeatils
      }
      aggregations
    }
  }
`;
export const search = /* GraphQL */ `
  query Search($query: String) {
    search(query: $query) {
      itemType
      id
      tagName
      coordinates
    }
  }
`;
export const searchTlandsnew = /* GraphQL */ `
  query SearchTlandsnew(
    $indexName: String
    $searchType: String
    $queryField: String
    $queryValue: String
  ) {
    searchTlandsnew(
      indexName: $indexName
      searchType: $searchType
      queryField: $queryField
      queryValue: $queryValue
    ) {
      PK
      PK1
      PK2
      PK3
      SK
      SK1
      SK2
      SK3
      gid
      id
      minMaxRange {
        minprice
        maxprice
        minarea
        maxarea
      }
      itemType
      orgName
      orgLegalName
      orgShortName
      orgSlug
      orgContactDetails
      orgAddressDetails
      orgBusinessDetails
      orgBrandDetails
      orgStatus
      orgAggregates
      isVerifiedOrg
      projName
      projShortName
      projSlug
      projDescription
      projContactDetails
      projCategory
      propertyCategories
      tags
      projBrandDetails
      projStatus
      projAggregates
      projLaunchDate
      projCompletedDate
      authorities
      projGeoDataReference
      projConfiguration
      projAddress
      projArea
      photos
      videos
      views360
      virtualTours
      tlTales
      documents
      pricingConfig
      subscriptionLevel
      projVisibility
      zoneName
      zoneShortName
      zoneSlug
      zoneLaunchDate
      zoneVisibility
      plotName
      plotSlug
      plotGeoDataReference
      plotStatus
      plotAreaDetails
      plotBasePrice
      plotPrice
      plotFacing
      plotConfiguration
      plotLatestTransaction
      ownershipType
      ownershipPercentage
      enquiryDate
      enquiryDesc
      enquiryFirstName
      enquiryLastName
      enquiryPhone
      enquiryEmail
      enquiryConsentDeatils
      enquiryStatus
      enquiryType
      userFirstName
      userLaststName
      userEmail
      userPhone
      userVisibility
      userCognitoID
      userConsentDeatils
    }
  }
`;
export const searchOnItem = /* GraphQL */ `
  query SearchOnItem($itemType: String, $queryField: String) {
    searchOnItem(itemType: $itemType, queryField: $queryField) {
      items
    }
  }
`;
export const queryTlandsByPK = /* GraphQL */ `
  query QueryTlandsByPK(
    $filter: QueryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    queryTlandsByPK(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        PK
        PK1
        PK2
        PK3
        SK
        SK1
        SK2
        SK3
        gid
        id
        minMaxRange {
          minprice
          maxprice
          minarea
          maxarea
        }
        itemType
        orgName
        orgLegalName
        orgShortName
        orgSlug
        orgContactDetails
        orgAddressDetails
        orgBusinessDetails
        orgBrandDetails
        orgStatus
        orgAggregates
        isVerifiedOrg
        projName
        projShortName
        projSlug
        projDescription
        projContactDetails
        projCategory
        propertyCategories
        tags
        projBrandDetails
        projStatus
        projAggregates
        projLaunchDate
        projCompletedDate
        authorities
        projGeoDataReference
        projConfiguration
        projAddress
        projArea
        photos
        videos
        views360
        virtualTours
        tlTales
        documents
        pricingConfig
        subscriptionLevel
        projVisibility
        zoneName
        zoneShortName
        zoneSlug
        zoneLaunchDate
        zoneVisibility
        plotName
        plotSlug
        plotGeoDataReference
        plotStatus
        plotAreaDetails
        plotBasePrice
        plotPrice
        plotFacing
        plotConfiguration
        plotLatestTransaction
        ownershipType
        ownershipPercentage
        enquiryDate
        enquiryDesc
        enquiryFirstName
        enquiryLastName
        enquiryPhone
        enquiryEmail
        enquiryConsentDeatils
        enquiryStatus
        enquiryType
        userFirstName
        userLaststName
        userEmail
        userPhone
        userVisibility
        userCognitoID
        userConsentDeatils
      }
      nextToken
    }
  }
`;
export const queryTlandsByGS1 = /* GraphQL */ `
  query QueryTlandsByGS1(
    $filter: QueryGS1FilterInput
    $limit: Int
    $nextToken: String
  ) {
    queryTlandsByGS1(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        PK
        PK1
        PK2
        PK3
        SK
        SK1
        SK2
        SK3
        gid
        id
        minMaxRange {
          minprice
          maxprice
          minarea
          maxarea
        }
        itemType
        orgName
        orgLegalName
        orgShortName
        orgSlug
        orgContactDetails
        orgAddressDetails
        orgBusinessDetails
        orgBrandDetails
        orgStatus
        orgAggregates
        isVerifiedOrg
        projName
        projShortName
        projSlug
        projDescription
        projContactDetails
        projCategory
        propertyCategories
        tags
        projBrandDetails
        projStatus
        projAggregates
        projLaunchDate
        projCompletedDate
        authorities
        projGeoDataReference
        projConfiguration
        projAddress
        projArea
        photos
        videos
        views360
        virtualTours
        tlTales
        documents
        pricingConfig
        subscriptionLevel
        projVisibility
        zoneName
        zoneShortName
        zoneSlug
        zoneLaunchDate
        zoneVisibility
        plotName
        plotSlug
        plotGeoDataReference
        plotStatus
        plotAreaDetails
        plotBasePrice
        plotPrice
        plotFacing
        plotConfiguration
        plotLatestTransaction
        ownershipType
        ownershipPercentage
        enquiryDate
        enquiryDesc
        enquiryFirstName
        enquiryLastName
        enquiryPhone
        enquiryEmail
        enquiryConsentDeatils
        enquiryStatus
        enquiryType
        userFirstName
        userLaststName
        userEmail
        userPhone
        userVisibility
        userCognitoID
        userConsentDeatils
      }
      nextToken
    }
  }
`;
export const queryTlandsByGS3 = /* GraphQL */ `
  query QueryTlandsByGS3(
    $filter: QueryGS3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    queryTlandsByGS3(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        PK
        PK1
        PK2
        PK3
        SK
        SK1
        SK2
        SK3
        gid
        id
        minMaxRange {
          minprice
          maxprice
          minarea
          maxarea
        }
        itemType
        orgName
        orgLegalName
        orgShortName
        orgSlug
        orgContactDetails
        orgAddressDetails
        orgBusinessDetails
        orgBrandDetails
        orgStatus
        orgAggregates
        isVerifiedOrg
        projName
        projShortName
        projSlug
        projDescription
        projContactDetails
        projCategory
        propertyCategories
        tags
        projBrandDetails
        projStatus
        projAggregates
        projLaunchDate
        projCompletedDate
        authorities
        projGeoDataReference
        projConfiguration
        projAddress
        projArea
        photos
        videos
        views360
        virtualTours
        tlTales
        documents
        pricingConfig
        subscriptionLevel
        projVisibility
        zoneName
        zoneShortName
        zoneSlug
        zoneLaunchDate
        zoneVisibility
        plotName
        plotSlug
        plotGeoDataReference
        plotStatus
        plotAreaDetails
        plotBasePrice
        plotPrice
        plotFacing
        plotConfiguration
        plotLatestTransaction
        ownershipType
        ownershipPercentage
        enquiryDate
        enquiryDesc
        enquiryFirstName
        enquiryLastName
        enquiryPhone
        enquiryEmail
        enquiryConsentDeatils
        enquiryStatus
        enquiryType
        userFirstName
        userLaststName
        userEmail
        userPhone
        userVisibility
        userCognitoID
        userConsentDeatils
      }
      nextToken
    }
  }
`;
export const queryTlandsByGS2 = /* GraphQL */ `
  query QueryTlandsByGS2(
    $filter: QueryGS2FilterInput
    $limit: Int
    $nextToken: String
  ) {
    queryTlandsByGS2(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        PK
        PK1
        PK2
        PK3
        SK
        SK1
        SK2
        SK3
        gid
        id
        minMaxRange {
          minprice
          maxprice
          minarea
          maxarea
        }
        itemType
        orgName
        orgLegalName
        orgShortName
        orgSlug
        orgContactDetails
        orgAddressDetails
        orgBusinessDetails
        orgBrandDetails
        orgStatus
        orgAggregates
        isVerifiedOrg
        projName
        projShortName
        projSlug
        projDescription
        projContactDetails
        projCategory
        propertyCategories
        tags
        projBrandDetails
        projStatus
        projAggregates
        projLaunchDate
        projCompletedDate
        authorities
        projGeoDataReference
        projConfiguration
        projAddress
        projArea
        photos
        videos
        views360
        virtualTours
        tlTales
        documents
        pricingConfig
        subscriptionLevel
        projVisibility
        zoneName
        zoneShortName
        zoneSlug
        zoneLaunchDate
        zoneVisibility
        plotName
        plotSlug
        plotGeoDataReference
        plotStatus
        plotAreaDetails
        plotBasePrice
        plotPrice
        plotFacing
        plotConfiguration
        plotLatestTransaction
        ownershipType
        ownershipPercentage
        enquiryDate
        enquiryDesc
        enquiryFirstName
        enquiryLastName
        enquiryPhone
        enquiryEmail
        enquiryConsentDeatils
        enquiryStatus
        enquiryType
        userFirstName
        userLaststName
        userEmail
        userPhone
        userVisibility
        userCognitoID
        userConsentDeatils
      }
      nextToken
    }
  }
`;
