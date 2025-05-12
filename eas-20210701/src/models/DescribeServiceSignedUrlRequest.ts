// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceSignedUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The period of time for which the URL expires.
   * 
   * @example
   * 43200
   */
  expire?: number;
  /**
   * @remarks
   * Specifies whether to use the VPC connection.
   * 
   * @example
   * false
   */
  internal?: boolean;
  /**
   * @remarks
   * The page type.
   * 
   * Valid values:
   * 
   * *   webview
   * *   monitor
   * 
   * @example
   * webview
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      expire: 'Expire',
      internal: 'Internal',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expire: 'number',
      internal: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

