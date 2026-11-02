// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishProductRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the HiMarket portal to which the API product is published. This parameter specifies the target portal for the publication. You can query the publication record by portal dimension by calling ListPortalPublications. This ID also appears in the publication record details and is paired with portalName.
   * 
   * @example
   * portal-xxxxxxxx
   */
  portalId?: string;
  static names(): { [key: string]: string } {
    return {
      portalId: 'portalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portalId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

