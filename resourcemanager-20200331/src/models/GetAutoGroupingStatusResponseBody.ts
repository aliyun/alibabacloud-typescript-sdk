// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutoGroupingStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the Transfer Existing Associated Resources feature is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableExistedResourcesTransfer?: boolean;
  /**
   * @remarks
   * The status of the Automatic Resource Transfer feature. Valid values:
   * 
   * *   Enabling: The feature is being enabled.
   * *   Enable: The feature is enabled.
   * *   Partial_Enable: The transfer of associated resources is enabled, but custom transfer rule-based resource transfer is disabled. You can call the [EnableAutoGrouping](https://help.aliyun.com/document_detail/2870380.html) operation to enable custom transfer rule-based resource transfer.
   * *   Disable: The feature is disabled.
   * 
   * @example
   * Enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0217AFEB-5318-56D4-B167-1933D83EDF3F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enableExistedResourcesTransfer: 'EnableExistedResourcesTransfer',
      enableStatus: 'EnableStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableExistedResourcesTransfer: 'boolean',
      enableStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

