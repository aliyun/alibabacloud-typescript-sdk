// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyChatappTemplateRequestComponentsButtonsSupportedApps } from "./ModifyChatappTemplateRequestComponentsButtonsSupportedApps";


export class ModifyChatappTemplateRequestComponentsButtons extends $dara.Model {
  /**
   * @remarks
   * The text of the one-tap autofill button. This parameter is required if Category is set to AUTHENTICATION and the Type sub-parameter of the Buttons parameter is set to ONE_TAP for a WhatsApp message template.
   * 
   * @example
   * Autofill
   */
  autofillText?: string;
  /**
   * @remarks
   * The coupon code. It can contain only letters and digits. You can set this parameter to a variable such as $(couponCode). Specify the value of couponCode when you send a message.
   * 
   * @example
   * 120293
   */
  couponCode?: string;
  /**
   * @remarks
   * The Flow action.
   * 
   * Valid values:
   * 
   * *   DATA_EXCHANGE
   * *   NAVIGATE
   * 
   * @example
   * NAVIGATE
   */
  flowAction?: string;
  /**
   * @remarks
   * The Flow ID.
   * 
   * @example
   * 664597077870605
   */
  flowId?: string;
  /**
   * @remarks
   * The unsubscribe button. This parameter is valid if Category is set to MARKETING and the Type sub-parameter of the Buttons parameter is set to QUICK_REPLY for a WhatsApp message template. Marketing messages will not be sent to customers if you configure message sending in the Chat App Message Service console and the customers click this button.
   * 
   * @example
   * false
   */
  isOptOut?: boolean;
  /**
   * @remarks
   * The first screen in the Flow. This parameter is required if FlowAction is set to NAVIGATE.
   * 
   * @example
   * DETAILS
   */
  navigateScreen?: string;
  /**
   * @remarks
   * The app package name that WhatsApp uses to load your app. This parameter is required if Category is set to AUTHENTICATION and the Type sub-parameter of the Buttons parameter is set to ONE_TAP for a WhatsApp message template.
   * 
   * @example
   * com.demo
   * 
   * @deprecated
   */
  packageName?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * +8613888887889
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The app signing key hash that WhatsApp uses to load your app. This parameter is required if Category is set to AUTHENTICATION and the Type sub-parameter of the Buttons parameter is set to ONE_TAP for a WhatsApp message template.
   * 
   * @example
   * 29dkeke
   * 
   * @deprecated
   */
  signatureHash?: string;
  /**
   * @remarks
   * List of supported apps.
   */
  supportedApps?: ModifyChatappTemplateRequestComponentsButtonsSupportedApps[];
  /**
   * @remarks
   * The text of the button.
   * 
   * @example
   * phone-button-text
   */
  text?: string;
  /**
   * @remarks
   * The button type. Valid values:
   * 
   * *   **PHONE_NUMBER**: phone call button
   * *   **URL**: URL button
   * *   **QUICK_REPLY**: quick reply button
   * *   **COPY_CODE**: copy code button
   * *   **ONE_TAP**: one-tap autofill button if Category is set to AUTHENTICATION
   * 
   * > 
   * 
   * *   If Category is set to AUTHENTICATION for a WhatsApp message template, you can add only one button to the WhatsApp message template and you must set the Type sub-parameter of the Buttons parameter to COPY_CODE or ONE_TAP. If Type is set to COPY_CODE, the Text sub-parameter of the Buttons parameter is required. If Type is set to ONE_TAP, the Text, SignatureHash, PackageName, and AutofillText sub-parameters of the Buttons parameter are required. The value of Text is displayed if the desired app is not installed on the device. The value of Text indicates that you must manually copy the verification code.
   * 
   * *   You can add only one button to a Viber message template, and you must set the Type sub-parameter of the Buttons parameter to URL.
   * 
   * This parameter is required.
   * 
   * @example
   * PHONE_NUMBER
   */
  type?: string;
  /**
   * @remarks
   * The URL to which you are redirected when you click the URL button.
   * 
   * @example
   * https://www.website.com/
   */
  url?: string;
  /**
   * @remarks
   * The URL type. Valid values:
   * 
   * *   **static**
   * *   **dynamic**
   * 
   * @example
   * dynamic
   */
  urlType?: string;
  static names(): { [key: string]: string } {
    return {
      autofillText: 'AutofillText',
      couponCode: 'CouponCode',
      flowAction: 'FlowAction',
      flowId: 'FlowId',
      isOptOut: 'IsOptOut',
      navigateScreen: 'NavigateScreen',
      packageName: 'PackageName',
      phoneNumber: 'PhoneNumber',
      signatureHash: 'SignatureHash',
      supportedApps: 'SupportedApps',
      text: 'Text',
      type: 'Type',
      url: 'Url',
      urlType: 'UrlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autofillText: 'string',
      couponCode: 'string',
      flowAction: 'string',
      flowId: 'string',
      isOptOut: 'boolean',
      navigateScreen: 'string',
      packageName: 'string',
      phoneNumber: 'string',
      signatureHash: 'string',
      supportedApps: { 'type': 'array', 'itemType': ModifyChatappTemplateRequestComponentsButtonsSupportedApps },
      text: 'string',
      type: 'string',
      url: 'string',
      urlType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportedApps)) {
      $dara.Model.validateArray(this.supportedApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

