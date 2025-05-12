// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPodsOfInstanceResponseBodyData extends $dara.Model {
  /**
   * @example
   * default
   */
  namespace?: string;
  /**
   * @example
   * test-pod
   */
  pod?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      pod: 'pod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      pod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

