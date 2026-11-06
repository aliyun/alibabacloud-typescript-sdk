// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudPermissionTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the permission template.
   * 
   * @example
   * cpt_01l8dagf2iablhigj75l1n99xxxxx
   */
  cloudPermissionTemplateId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudPermissionTemplateId: 'CloudPermissionTemplateId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudPermissionTemplateId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

