// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetChatappTemplateDetailResponseBodyDataComponentsButtonsExtendAttrs } from "./GetChatappTemplateDetailResponseBodyDataComponentsButtonsExtendAttrs";
import { GetChatappTemplateDetailResponseBodyDataComponentsButtonsSupportedApps } from "./GetChatappTemplateDetailResponseBodyDataComponentsButtonsSupportedApps";


export class GetChatappTemplateDetailResponseBodyDataComponentsButtons extends $dara.Model {
  /**
   * @remarks
   * The text of the one-tap autofill button. This parameter is required if Category is set to AUTHENTICATION and the Type sub-parameter of the Buttons parameter is set to ONE_TAP in a WhatsApp message template.
   * 
   * @example
   * Autofill
   */
  autofillText?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * 202039ksjs
   */
  couponCode?: string;
  /**
   * @remarks
   * The extended fields.
   */
  extendAttrs?: GetChatappTemplateDetailResponseBodyDataComponentsButtonsExtendAttrs;
  /**
   * @remarks
   * The Flow action. Valid values: NAVIGATE and DATA_EXCHANGE.
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
   * 3838292983
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
   * The first screen in the Flow. This parameter is returned if FlowAction is set to NAVIGATE.
   * 
   * @example
   * DETAILS
   */
  navigateScreen?: string;
  /**
   * @remarks
   * The app package name that WhatsApp uses to load your app. This parameter is required if Category is set to AUTHENTICATION and the Type sub-parameter of the Buttons parameter is set to ONE_TAP in a WhatsApp message template.
   * 
   * @example
   * com.aliyun
   */
  packageName?: string;
  /**
   * @remarks
   * The phone number. This parameter is valid only if the Type sub-parameter of the Buttons parameter is set to **PHONE_NUMBER**.
   * 
   * @example
   * 861398745****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The app signing key hash that WhatsApp uses to load your app. This parameter is required if Category is set to AUTHENTICATION and the Type sub-parameter of the Buttons parameter is set to ONE_TAP in a WhatsApp message template.
   * 
   * @example
   * 2993839
   */
  signatureHash?: string;
  /**
   * @remarks
   * The apps that support one-tap authentication and zero-tap authentication.
   */
  supportedApps?: GetChatappTemplateDetailResponseBodyDataComponentsButtonsSupportedApps[];
  /**
   * @remarks
   * The display name of the button.
   * 
   * @example
   * Call
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
   * @example
   * PHONE_NUMBER
   */
  type?: string;
  /**
   * @remarks
   * The URL to which you are redirected when you click the URL button.
   * 
   * @example
   * https://example.com
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
   * static
   */
  urlType?: string;
  static names(): { [key: string]: string } {
    return {
      autofillText: 'AutofillText',
      couponCode: 'CouponCode',
      extendAttrs: 'ExtendAttrs',
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
      extendAttrs: GetChatappTemplateDetailResponseBodyDataComponentsButtonsExtendAttrs,
      flowAction: 'string',
      flowId: 'string',
      isOptOut: 'boolean',
      navigateScreen: 'string',
      packageName: 'string',
      phoneNumber: 'string',
      signatureHash: 'string',
      supportedApps: { 'type': 'array', 'itemType': GetChatappTemplateDetailResponseBodyDataComponentsButtonsSupportedApps },
      text: 'string',
      type: 'string',
      url: 'string',
      urlType: 'string',
    };
  }

  validate() {
    if(this.extendAttrs && typeof (this.extendAttrs as any).validate === 'function') {
      (this.extendAttrs as any).validate();
    }
    if(Array.isArray(this.supportedApps)) {
      $dara.Model.validateArray(this.supportedApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

