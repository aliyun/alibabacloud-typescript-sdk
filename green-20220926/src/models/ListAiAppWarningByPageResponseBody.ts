// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAiAppWarningByPageResponseBodyExt extends $dara.Model {
  /**
   * @remarks
   * The option.
   */
  option?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      option: 'Option',
    };
  }

  static types(): { [key: string]: any } {
    return {
      option: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.option) {
      $dara.Model.validateMap(this.option);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAiAppWarningByPageResponseBodyItemsLabels extends $dara.Model {
  /**
   * @remarks
   * The count.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The label name.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * desc-xxx
   */
  labelDesc?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * promptAttack
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      label: 'Label',
      labelDesc: 'LabelDesc',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      label: 'string',
      labelDesc: 'string',
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

export class ListAiAppWarningByPageResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * appId。
   * 
   * @example
   * id-xxx
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * name-xxx
   */
  appName?: string;
  /**
   * @remarks
   * The list of labels.
   */
  labels?: ListAiAppWarningByPageResponseBodyItemsLabels[];
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * baselineCheck_01
   */
  serviceCode?: string;
  /**
   * @remarks
   * The trace ID used to correlate and trace alert events.
   * 
   * @example
   * 0bc3b4b0********516098843e19bc
   */
  traceId?: string;
  /**
   * @remarks
   * The number of alerts.
   * 
   * @example
   * 10
   */
  warningCount?: number;
  /**
   * @remarks
   * The time when the alert was triggered.
   * 
   * @example
   * 2026-01-01 00:00:00
   */
  warningTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      labels: 'Labels',
      serviceCode: 'ServiceCode',
      traceId: 'TraceId',
      warningCount: 'WarningCount',
      warningTime: 'WarningTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      labels: { 'type': 'array', 'itemType': ListAiAppWarningByPageResponseBodyItemsLabels },
      serviceCode: 'string',
      traceId: 'string',
      warningCount: 'number',
      warningTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAiAppWarningByPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The extension field.
   */
  ext?: ListAiAppWarningByPageResponseBodyExt;
  /**
   * @remarks
   * The data on the current page.
   */
  items?: ListAiAppWarningByPageResponseBodyItems[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      ext: 'Ext',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      ext: ListAiAppWarningByPageResponseBodyExt,
      items: { 'type': 'array', 'itemType': ListAiAppWarningByPageResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.ext && typeof (this.ext as any).validate === 'function') {
      (this.ext as any).validate();
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

