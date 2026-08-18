// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCrawlerTypeCapabilitiesResponseBodyCrawlerTypesSupportedEntityTypes extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the metadata entity level is optional.
   */
  optional?: boolean;
  /**
   * @remarks
   * The parent-level metadata entity subtype.
   * 
   * @example
   * instance
   */
  parentSubType?: string;
  /**
   * @remarks
   * The metadata entity subtype.
   * 
   * @example
   * database
   */
  subType?: string;
  /**
   * @remarks
   * The metadata entity type identifier.
   * 
   * @example
   * holo
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      optional: 'Optional',
      parentSubType: 'ParentSubType',
      subType: 'SubType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optional: 'boolean',
      parentSubType: 'string',
      subType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCrawlerTypeCapabilitiesResponseBodyCrawlerTypesSupportedOptionKeys extends $dara.Model {
  /**
   * @remarks
   * The list of allowed values for the extension configuration item.
   */
  allowedValues?: string[];
  /**
   * @remarks
   * The default value of the extension configuration item.
   * 
   * @example
   * false
   */
  defaultValue?: string;
  /**
   * @remarks
   * The name of the extension configuration item.
   * 
   * @example
   * CollectRecyclebin
   */
  key?: string;
  /**
   * @remarks
   * Indicates whether the extension configuration item is required.
   */
  required?: boolean;
  /**
   * @remarks
   * The value type of the extension configuration item, such as BOOLEAN.
   * 
   * @example
   * BOOLEAN
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      allowedValues: 'AllowedValues',
      defaultValue: 'DefaultValue',
      key: 'Key',
      required: 'Required',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedValues: { 'type': 'array', 'itemType': 'string' },
      defaultValue: 'string',
      key: 'string',
      required: 'boolean',
      valueType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedValues)) {
      $dara.Model.validateArray(this.allowedValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCrawlerTypeCapabilitiesResponseBodyCrawlerTypes extends $dara.Model {
  /**
   * @remarks
   * The default collection scope granularity.
   * 
   * @example
   * DATABASE
   */
  defaultScopeUnit?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * Hologres
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether a resource group must be specified when creating this type of crawler.
   */
  requireResourceGroup?: boolean;
  /**
   * @remarks
   * Indicates whether AI metadata description is supported.
   */
  supportAiComment?: boolean;
  /**
   * @remarks
   * Indicates whether schema or table exclusion regular expressions are supported.
   */
  supportExcludeRegex?: boolean;
  /**
   * @remarks
   * Indicates whether periodic scheduling is supported.
   */
  supportSchedule?: boolean;
  /**
   * @remarks
   * The list of supported data source types.
   */
  supportedDatasourceTypes?: string[];
  /**
   * @remarks
   * The metadata entity levels that the crawler type supports for collection.
   */
  supportedEntityTypes?: GetCrawlerTypeCapabilitiesResponseBodyCrawlerTypesSupportedEntityTypes[];
  /**
   * @remarks
   * The supported crawler extension configuration items.
   */
  supportedOptionKeys?: GetCrawlerTypeCapabilitiesResponseBodyCrawlerTypesSupportedOptionKeys[];
  /**
   * @remarks
   * The list of supported collection scope granularities.
   */
  supportedScopeUnits?: string[];
  /**
   * @remarks
   * The crawler type.
   * 
   * @example
   * holo
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      defaultScopeUnit: 'DefaultScopeUnit',
      displayName: 'DisplayName',
      requireResourceGroup: 'RequireResourceGroup',
      supportAiComment: 'SupportAiComment',
      supportExcludeRegex: 'SupportExcludeRegex',
      supportSchedule: 'SupportSchedule',
      supportedDatasourceTypes: 'SupportedDatasourceTypes',
      supportedEntityTypes: 'SupportedEntityTypes',
      supportedOptionKeys: 'SupportedOptionKeys',
      supportedScopeUnits: 'SupportedScopeUnits',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultScopeUnit: 'string',
      displayName: 'string',
      requireResourceGroup: 'boolean',
      supportAiComment: 'boolean',
      supportExcludeRegex: 'boolean',
      supportSchedule: 'boolean',
      supportedDatasourceTypes: { 'type': 'array', 'itemType': 'string' },
      supportedEntityTypes: { 'type': 'array', 'itemType': GetCrawlerTypeCapabilitiesResponseBodyCrawlerTypesSupportedEntityTypes },
      supportedOptionKeys: { 'type': 'array', 'itemType': GetCrawlerTypeCapabilitiesResponseBodyCrawlerTypesSupportedOptionKeys },
      supportedScopeUnits: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportedDatasourceTypes)) {
      $dara.Model.validateArray(this.supportedDatasourceTypes);
    }
    if(Array.isArray(this.supportedEntityTypes)) {
      $dara.Model.validateArray(this.supportedEntityTypes);
    }
    if(Array.isArray(this.supportedOptionKeys)) {
      $dara.Model.validateArray(this.supportedOptionKeys);
    }
    if(Array.isArray(this.supportedScopeUnits)) {
      $dara.Model.validateArray(this.supportedScopeUnits);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCrawlerTypeCapabilitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of crawler types and capabilities supported in the current region.
   */
  crawlerTypes?: GetCrawlerTypeCapabilitiesResponseBodyCrawlerTypes[];
  /**
   * @remarks
   * The request ID. Used for locating logs and troubleshooting issues.
   * 
   * @example
   * 9252F32F-D855-549E-8898-61CF5A733050
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      crawlerTypes: 'CrawlerTypes',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crawlerTypes: { 'type': 'array', 'itemType': GetCrawlerTypeCapabilitiesResponseBodyCrawlerTypes },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.crawlerTypes)) {
      $dara.Model.validateArray(this.crawlerTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

