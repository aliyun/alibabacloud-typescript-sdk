// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersResponseBodyClustersClusterCustomConfiguration extends $dara.Model {
  /**
   * @remarks
   * The parameters of the post-processing script.
   * 
   * @example
   * demo
   */
  args?: string;
  /**
   * @remarks
   * The link to the post-processing script.
   * 
   * @example
   * https://xxxxx
   */
  script?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      script: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

