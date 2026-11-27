// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutoGroupingStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether automatic grouping for existing resources is enabled. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enableExistedResourcesTransfer?: boolean;
  /**
   * @remarks
   * The activation status of automatic grouping. Valid values:
   * - Enabling: Activating.
   * - Enable: Activated.
   * - Partial_Enable: Automatic grouping for associated resources is activated, but automatic grouping based on custom conditions is not activated. To activate automatic grouping based on custom conditions, call [EnableAutoGrouping](~~EnableAutoGrouping~~).
   * - Disable: Not activated.
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

