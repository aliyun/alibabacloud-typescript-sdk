// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewOutputFileRequest extends $dara.Model {
  /**
   * @remarks
   * The output item ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleOutputItemId
   */
  outputItemId?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The version referenced by the alias.
   * 
   * @example
   * exampleVersionId
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      outputItemId: 'outputItemId',
      tenantId: 'tenantId',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputItemId: 'string',
      tenantId: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

