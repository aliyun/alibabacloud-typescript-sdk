// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIngressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the routing rule to delete. You can obtain the ID by calling the [ListIngresses](https://help.aliyun.com/document_detail/153934.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 87
   */
  ingressId?: number;
  static names(): { [key: string]: string } {
    return {
      ingressId: 'IngressId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

