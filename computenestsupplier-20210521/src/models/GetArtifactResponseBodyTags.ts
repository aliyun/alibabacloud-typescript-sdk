// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the deployment package.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the deployment package.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

