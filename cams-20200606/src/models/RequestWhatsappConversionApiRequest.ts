// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RequestWhatsappConversionApiRequestRequestData extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * business_messaging
   */
  actionSource?: string;
  appData?: { [key: string]: any };
  customData?: { [key: string]: any };
  dataProcessingOptions?: string[];
  /**
   * @example
   * 100
   */
  dataProcessingOptionsCountry?: number;
  /**
   * @example
   * 26
   */
  dataProcessingOptionsState?: number;
  /**
   * @example
   * 20029399299
   */
  eventId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Purchase
   */
  eventName?: string;
  /**
   * @example
   * http://alibaba.com
   */
  eventSourceUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1709201870
   */
  eventTime?: number;
  extInfo?: { [key: string]: any };
  /**
   * @example
   * whatsapp
   */
  messagingChannel?: string;
  /**
   * @example
   * true
   */
  optOut?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  userData?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      actionSource: 'ActionSource',
      appData: 'AppData',
      customData: 'CustomData',
      dataProcessingOptions: 'DataProcessingOptions',
      dataProcessingOptionsCountry: 'DataProcessingOptionsCountry',
      dataProcessingOptionsState: 'DataProcessingOptionsState',
      eventId: 'EventId',
      eventName: 'EventName',
      eventSourceUrl: 'EventSourceUrl',
      eventTime: 'EventTime',
      extInfo: 'ExtInfo',
      messagingChannel: 'MessagingChannel',
      optOut: 'OptOut',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionSource: 'string',
      appData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      customData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dataProcessingOptions: { 'type': 'array', 'itemType': 'string' },
      dataProcessingOptionsCountry: 'number',
      dataProcessingOptionsState: 'number',
      eventId: 'string',
      eventName: 'string',
      eventSourceUrl: 'string',
      eventTime: 'number',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      messagingChannel: 'string',
      optOut: 'boolean',
      userData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.appData) {
      $dara.Model.validateMap(this.appData);
    }
    if(this.customData) {
      $dara.Model.validateMap(this.customData);
    }
    if(Array.isArray(this.dataProcessingOptions)) {
      $dara.Model.validateArray(this.dataProcessingOptions);
    }
    if(this.extInfo) {
      $dara.Model.validateMap(this.extInfo);
    }
    if(this.userData) {
      $dara.Model.validateMap(this.userData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestWhatsappConversionApiRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 929399382
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1939848838
   */
  pageId?: string;
  requestData?: RequestWhatsappConversionApiRequestRequestData[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      pageId: 'PageId',
      requestData: 'RequestData',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      ownerId: 'number',
      pageId: 'string',
      requestData: { 'type': 'array', 'itemType': RequestWhatsappConversionApiRequestRequestData },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.requestData)) {
      $dara.Model.validateArray(this.requestData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

