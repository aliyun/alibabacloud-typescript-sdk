// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ArtifactStatus extends $dara.Model {
  /**
   * @example
   * acs:devs:cn-hangzhou:123456:artifacts/my-first-artifact
   */
  arn?: string;
  /**
   * @example
   * 2825179536350****
   */
  checksum?: string;
  /**
   * @example
   * 1024
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      arn: 'arn',
      checksum: 'checksum',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      checksum: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

