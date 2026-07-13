// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableCheckResourceRequest extends $dara.Model {
  /**
   * @remarks
   * Unique resource identity.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ecs:123***890:cn-shanghai:instance/i-001***90
   */
  resourceArn?: string;
  static names(): { [key: string]: string } {
    return {
      resourceArn: 'ResourceArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

