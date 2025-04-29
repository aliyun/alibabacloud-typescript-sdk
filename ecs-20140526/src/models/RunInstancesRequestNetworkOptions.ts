// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunInstancesRequestNetworkOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the Jumbo Frames feature for the instance. Valid values:
   * 
   * *   false: does not enable the Jumbo Frames feature for the instance. The maximum transmission unit (MTU) value of all ENIs on the instance is set to 1500.
   * *   true: enables the Jumbo Frames feature for the instance. The MTU value of all ENIs on the instance is set to 8500.
   * 
   * Default value: true.
   * 
   * >  The Jumbo Frames feature is supported by only 8th-generation or later instance types. For more information, see [Jumbo Frames](https://help.aliyun.com/document_detail/200512.html).
   * 
   * @example
   * false
   */
  enableJumboFrame?: boolean;
  enableNetworkEncryption?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableJumboFrame: 'EnableJumboFrame',
      enableNetworkEncryption: 'EnableNetworkEncryption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableJumboFrame: 'boolean',
      enableNetworkEncryption: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

