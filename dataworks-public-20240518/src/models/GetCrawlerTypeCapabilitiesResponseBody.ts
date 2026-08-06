// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCrawlerTypeCapabilitiesResponseBodyCrawlerTypesSupportedEntityTypes extends $dara.Model {
  optional?: boolean;
  /**
   * @example
   * instance
   */
  parentSubType?: string;
  /**
   * @example
   * database
   */
  subType?: string;
  /**
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
  allowedValues?: string[];
  /**
   * @example
   * false
   */
  defaultValue?: string;
  /**
   * @example
   * CollectRecyclebin
   */
  key?: string;
  required?: boolean;
  /**
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
   * @example
   * DATABASE
   */
  defaultScopeUnit?: string;
  /**
   * @example
   * Hologres
   */
  displayName?: string;
  requireResourceGroup?: boolean;
  supportAiComment?: boolean;
  supportExcludeRegex?: boolean;
  supportSchedule?: boolean;
  supportedDatasourceTypes?: string[];
  supportedEntityTypes?: GetCrawlerTypeCapabilitiesResponseBodyCrawlerTypesSupportedEntityTypes[];
  supportedOptionKeys?: GetCrawlerTypeCapabilitiesResponseBodyCrawlerTypesSupportedOptionKeys[];
  supportedScopeUnits?: string[];
  /**
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
  crawlerTypes?: GetCrawlerTypeCapabilitiesResponseBodyCrawlerTypes[];
  /**
   * @example
   * 9252F32F-D855-549E-8898-61CF5A733050
   */
  requestId?: string;
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

