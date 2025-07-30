// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFingerPrintTemplatesResponseBodyFingerPrintTemplates extends $dara.Model {
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * @example
   * 2258a3d5-b8f8-4d79-a221-eaecf211****
   */
  clientId?: string;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2022-03-13T13:26:29Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * Finger 1
   */
  description?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * liming
   */
  endUserId?: string;
  /**
   * @remarks
   * The index.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The logon time.
   * 
   * @example
   * 2022-03-13T13:26:29Z
   */
  loginTime?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-074949****
   */
  officeSiteId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      creationTime: 'CreationTime',
      description: 'Description',
      endUserId: 'EndUserId',
      index: 'Index',
      loginTime: 'LoginTime',
      officeSiteId: 'OfficeSiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      creationTime: 'string',
      description: 'string',
      endUserId: 'string',
      index: 'number',
      loginTime: 'string',
      officeSiteId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFingerPrintTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The fingerprint templates.
   */
  fingerPrintTemplates?: DescribeFingerPrintTemplatesResponseBodyFingerPrintTemplates[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9C1D3FBE-84E1-5ABB-AD98-2003AC71****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fingerPrintTemplates: 'FingerPrintTemplates',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fingerPrintTemplates: { 'type': 'array', 'itemType': DescribeFingerPrintTemplatesResponseBodyFingerPrintTemplates },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fingerPrintTemplates)) {
      $dara.Model.validateArray(this.fingerPrintTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

