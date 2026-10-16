// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutoGroupingStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the attached-resource allocation for existing resources is enabled. Valid values:
   * - true: Enabled.
   * - false: Not enabled.
   * 
   * @example
   * true
   */
  enableExistedResourcesTransfer?: boolean;
  /**
   * @remarks
   * The status of automatic resource group transfer. Valid values:
   * - Enabling: Being enabled.
   * - Enable: Enabled.
   * - Partial_Enable: Attached-resource allocation is enabled, but custom condition-based resource group transfer is not enabled. To enable custom condition-based resource group transfer, call [EnableAutoGrouping](~~EnableAutoGrouping~~).
   * - Disable: Not enabled.
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

