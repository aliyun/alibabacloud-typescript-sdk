// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishApplicationVersionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a395011f-a247-400f-bc69-28796749fd52
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-c11iig67g863rih8
   */
  businessUnitId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 82ea16d1-425c-4c03-9be5-cc91de9779ed
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      businessUnitId: 'BusinessUnitId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      businessUnitId: 'string',
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

