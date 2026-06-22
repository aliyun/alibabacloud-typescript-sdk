// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RequestWhatsappConversionApiRequestRequestData extends $dara.Model {
  /**
   * @remarks
   * Specifies where the conversion occurred. Knowing where the event occurred helps ensure that ads are delivered to the correct audience. By using the Conversions API, you agree that the action_source parameter is accurate to the best of your knowledge.
   * 
   * 
   * The values you can send in the action_source field are as follows:
   * 
   * 
   * - email: The conversion occurred through email.
   * - website: The conversion was made on a website.
   * - app: The conversion was made on a shift application.
   * - phone_call: The conversion was made over the phone.
   * - chat: The conversion was made through a messaging app, SMS, or online messaging feature.
   * - physical_store: The conversion was made in person at a physical store entity.
   * - system_generated: The conversion occurred automatically, such as a subscribe renewal with Settings for monthly automatic payment.
   * - other: The conversion was made through a method not listed in this topic.
   * 
   * Note: All action source values support ads measurement and custom audience creation. All action sources except physical_store support ads optimization.
   * 
   * This parameter is required.
   * 
   * @example
   * business_messaging
   */
  actionSource?: string;
  /**
   * @remarks
   * Required parameters for app events.
   * 
   * These parameters are used to share app data and device information with the Conversions API.
   */
  appData?: { [key: string]: any };
  /**
   * @remarks
   * A map that contains additional business data for the event.
   */
  customData?: { [key: string]: any };
  /**
   * @remarks
   * The processing options you want to enable for a specific event. For Limited Data Use, the currently accepted value is LDU. You can send an empty array to explicitly specify that the event must not be processed with Limited Data Use restrictions.
   */
  dataProcessingOptions?: string[];
  /**
   * @remarks
   * Required if you send LDU under data_processing_options.
   * The country you want to associate with this data processing option. Currently accepted values are 1 (representing the United States) or 0 (requesting that we geolocate this event).
   * 
   * @example
   * 100
   */
  dataProcessingOptionsCountry?: number;
  /**
   * @remarks
   * Required in some cases. (See the notes below for details.)
   * The state you want to associate with this data processing option. Currently accepted values are 1000 (representing California) or 0 (requesting that we geolocate this event).
   * 
   * @example
   * 26
   */
  dataProcessingOptionsState?: number;
  /**
   * @remarks
   * This ID can be any unique string chosen by the advertiser. The event_name and event_id parameters are used to deduplicate events sent by a website (through Meta Pixel), an app (through the SDK or App Events API), and the Conversions API. Although event_id is marked as optional, we recommend that you use this parameter for deduplication.
   * 
   * @example
   * 20029399299
   */
  eventId?: string;
  /**
   * @remarks
   * - The name of a standard event or custom event. This field is used to deduplicate events sent by a website (through Meta Pixel), an app (through the SDK or App Events API), and the Conversions API. The event_id parameter is also used for deduplication.
   * 
   * - For the same customer action, the event from the browser or app should match the event_name from the server event. If a match is found between events sent within 48 hours, only the first event is considered. If server and browser/app events are received at approximately the same time (within 5 minutes of each other), the browser/app event takes priority. Learn more about deduplicating Pixel events and server events.
   * 
   * This parameter is required.
   * 
   * @example
   * Purchase
   */
  eventName?: string;
  /**
   * @remarks
   * The browser URL where the event occurred. The URL must start with http:// or https:// and should match the verified domain.
   * 
   * @example
   * http://alibaba.com
   */
  eventSourceUrl?: string;
  /**
   * @remarks
   * A Unix timestamp in seconds indicating when the event actually occurred. The specified time may be earlier than the time you send the event to Facebook. This is intended for batch processing and server performance optimization. You must send the date in Greenwich Mean Time (GMT) time zone format.
   * 
   * This parameter is required.
   * 
   * @example
   * 1709201870
   */
  eventTime?: number;
  /**
   * @remarks
   * Required parameters for app events.
   * 
   * Extended device information, such as the width and height of the screen. This parameter is an array with values separated by commas. When using extinfo, all values are required and must be arranged in the following index order. If a value is missing, use an empty string as a placeholder.
   */
  extInfo?: { [key: string]: any };
  /**
   * @remarks
   * The source. Fixed value: whatsapp.
   * 
   * @example
   * whatsapp
   */
  messagingChannel?: string;
  /**
   * @remarks
   * A flag that indicates this event should not be used for ad delivery optimization. When set to true, the event can only be used for attribution.
   * 
   * @example
   * true
   */
  optOut?: boolean;
  /**
   * @remarks
   * A map that contains customer information data.
   * 
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
   * The space ID or instance ID of the customer.
   * 
   * This parameter is required.
   * 
   * @example
   * 929399382
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The PageId of Meta.
   * 
   * This parameter is required.
   * 
   * @example
   * 1939848838
   */
  pageId?: string;
  /**
   * @remarks
   * The request data.
   */
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

