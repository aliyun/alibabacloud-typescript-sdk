// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewRenderingInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Enable or disable auto-renewal. Valid values:
   * 
   * - **true**: Enable.
   * 
   * - **false**: Disable.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The duration of the subscription. Valid values are 1 (default), 2, 3, 4, 5, 6, 7, 8, 9, 12. A value of 12 is converted to one year; other values are in months.
   * 
   * @example
   * 1
   */
  period?: string;
  /**
   * @remarks
   * Cloud application service instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      period: 'Period',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      period: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

