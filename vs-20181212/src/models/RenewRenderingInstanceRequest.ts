// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewRenderingInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * * **true**: Enabled.
   * * **false**: Disabled.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The subscription duration. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, and 12. Default value: 1. A value of 12 indicates one year, while other values indicate months.
   * 
   * @example
   * 1
   */
  period?: string;
  /**
   * @remarks
   * The cloud application service instance ID.
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

