// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSignatureLibVersionResponseBodyVersion extends $dara.Model {
  /**
   * @remarks
   * The type.
   * 
   * Valid values:
   * 
   * *   ips
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     Basic Rules and Virtual Patching
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   intelligence
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     Threat Intelligence
   * 
   *     <!-- -->
   * 
   * @example
   * ips
   */
  type?: string;
  updateTime?: number;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * IPS-2307-02
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      updateTime: 'UpdateTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      updateTime: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

