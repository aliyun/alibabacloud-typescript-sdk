// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkloadsResponseBodyDataStaticConfig extends $dara.Model {
  /**
   * @remarks
   * Framework
   * 
   * @example
   * PyTorch
   */
  frameWork?: string;
  /**
   * @remarks
   * Operating System
   * 
   * @example
   * linux
   */
  os?: string;
  /**
   * @remarks
   * Number of Parameters
   * 
   * @example
   * 7B
   */
  parameters?: string;
  /**
   * @remarks
   * Software Stack
   * 
   * @example
   * python
   */
  softwareStack?: string;
  static names(): { [key: string]: string } {
    return {
      frameWork: 'FrameWork',
      os: 'Os',
      parameters: 'Parameters',
      softwareStack: 'SoftwareStack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameWork: 'string',
      os: 'string',
      parameters: 'string',
      softwareStack: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

