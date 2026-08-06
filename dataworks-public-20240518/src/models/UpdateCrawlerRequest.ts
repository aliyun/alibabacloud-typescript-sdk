// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCrawlerRequestScheduleConfig extends $dara.Model {
  /**
   * @example
   * 0 0 2 ? * *
   */
  cronExpress?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpress: 'CronExpress',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpress: 'string',
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

export class UpdateCrawlerRequestScope extends $dara.Model {
  /**
   * @example
   * ^tmp_.*
   */
  excludeRegex?: string;
  items?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DATABASE
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      excludeRegex: 'ExcludeRegex',
      items: 'Items',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeRegex: 'string',
      items: { 'type': 'array', 'itemType': 'string' },
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCrawlerRequest extends $dara.Model {
  enableAiComment?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  options?: { [key: string]: string };
  /**
   * @example
   * Serverless_res_group_1234567890123456_1234567890
   */
  resourceGroupId?: string;
  scheduleConfig?: UpdateCrawlerRequestScheduleConfig;
  scope?: UpdateCrawlerRequestScope;
  static names(): { [key: string]: string } {
    return {
      enableAiComment: 'EnableAiComment',
      id: 'Id',
      options: 'Options',
      resourceGroupId: 'ResourceGroupId',
      scheduleConfig: 'ScheduleConfig',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAiComment: 'boolean',
      id: 'number',
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      resourceGroupId: 'string',
      scheduleConfig: UpdateCrawlerRequestScheduleConfig,
      scope: UpdateCrawlerRequestScope,
    };
  }

  validate() {
    if(this.options) {
      $dara.Model.validateMap(this.options);
    }
    if(this.scheduleConfig && typeof (this.scheduleConfig as any).validate === 'function') {
      (this.scheduleConfig as any).validate();
    }
    if(this.scope && typeof (this.scope as any).validate === 'function') {
      (this.scope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

