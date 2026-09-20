// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceServiceConfigurationsResponseBodyConfigureListConfig extends $dara.Model {
  configureName?: string;
  configureUnit?: string;
  defaultValue?: string;
  description?: string;
  needRestart?: string;
  runningValue?: string;
  valueRange?: string;
  static names(): { [key: string]: string } {
    return {
      configureName: 'ConfigureName',
      configureUnit: 'ConfigureUnit',
      defaultValue: 'DefaultValue',
      description: 'Description',
      needRestart: 'NeedRestart',
      runningValue: 'RunningValue',
      valueRange: 'ValueRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configureName: 'string',
      configureUnit: 'string',
      defaultValue: 'string',
      description: 'string',
      needRestart: 'string',
      runningValue: 'string',
      valueRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceServiceConfigurationsResponseBodyConfigureList extends $dara.Model {
  config?: ListInstanceServiceConfigurationsResponseBodyConfigureListConfig[];
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'array', 'itemType': ListInstanceServiceConfigurationsResponseBodyConfigureListConfig },
    };
  }

  validate() {
    if(Array.isArray(this.config)) {
      $dara.Model.validateArray(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceServiceConfigurationsResponseBody extends $dara.Model {
  configureList?: ListInstanceServiceConfigurationsResponseBodyConfigureList;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5B381E36-BCA3-4377-8638-B65C236617D5
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 42
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      configureList: 'ConfigureList',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configureList: ListInstanceServiceConfigurationsResponseBodyConfigureList,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.configureList && typeof (this.configureList as any).validate === 'function') {
      (this.configureList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

