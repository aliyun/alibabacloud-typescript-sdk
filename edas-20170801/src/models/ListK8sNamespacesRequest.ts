// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListK8sNamespacesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster in Enterprise Distributed Application Service (EDAS).
   * 
   * @example
   * 5b2b4ab4-efbc-4a81-9c45-xxxxxxxxxxxxx
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

