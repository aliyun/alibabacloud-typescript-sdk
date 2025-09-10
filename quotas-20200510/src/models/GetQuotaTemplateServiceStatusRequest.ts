// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaTemplateServiceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-pG****
   */
  resourceDirectoryId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceDirectoryId: 'ResourceDirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceDirectoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

