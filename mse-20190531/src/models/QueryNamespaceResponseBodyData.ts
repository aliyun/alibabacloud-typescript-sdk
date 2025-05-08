// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryNamespaceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The region to which the namespace belongs.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

