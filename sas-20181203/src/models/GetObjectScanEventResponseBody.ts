// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetObjectScanEventResponseBodyDataDetails extends $dara.Model {
  /**
   * @remarks
   * The type of the item.
   * 
   * @example
   * html
   */
  infoType?: string;
  /**
   * @remarks
   * The name of the item.
   * 
   * @example
   * DownloadUrl
   */
  name?: string;
  /**
   * @remarks
   * The display name of the item.
   * 
   * @example
   * DownloadUrl
   */
  nameDisplay?: string;
  /**
   * @remarks
   * The type of the item.
   * 
   * @example
   * html
   */
  type?: string;
  /**
   * @remarks
   * The value of the item.
   * 
   * @example
   * http://****
   */
  value?: string;
  /**
   * @remarks
   * The display value of the item.
   * 
   * @example
   * http://****
   */
  valueDisplay?: string;
  static names(): { [key: string]: string } {
    return {
      infoType: 'InfoType',
      name: 'Name',
      nameDisplay: 'NameDisplay',
      type: 'Type',
      value: 'Value',
      valueDisplay: 'ValueDisplay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoType: 'string',
      name: 'string',
      nameDisplay: 'string',
      type: 'string',
      value: 'string',
      valueDisplay: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectScanEventResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the alert event.
   */
  details?: GetObjectScanEventResponseBodyDataDetails[];
  /**
   * @remarks
   * The name of the alert item.
   * 
   * @example
   * WebShell
   */
  eventName?: string;
  /**
   * @remarks
   * The name of the object.
   * 
   * @example
   * sca_2023****
   */
  fileName?: string;
  /**
   * @remarks
   * The MD5 hash value of the object.
   * 
   * @example
   * 0552c44e243abdea1729d4507bce****
   */
  md5?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      eventName: 'EventName',
      fileName: 'FileName',
      md5: 'Md5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': GetObjectScanEventResponseBodyDataDetails },
      eventName: 'string',
      fileName: 'string',
      md5: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectScanEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetObjectScanEventResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30CBF632-109F-596F-97F2-451C8B2A****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetObjectScanEventResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

