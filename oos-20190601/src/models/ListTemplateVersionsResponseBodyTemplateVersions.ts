// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplateVersionsResponseBodyTemplateVersions extends $dara.Model {
  /**
   * @remarks
   * The description of the version.
   * 
   * @example
   * Detach the eip from the special instance.
   */
  description?: string;
  /**
   * @remarks
   * The format of the template content. Valid values: YAML and JSON.
   * 
   * @example
   * YAML
   */
  templateFormat?: string;
  /**
   * @remarks
   * The number of the version.
   * 
   * @example
   * v2
   */
  templateVersion?: string;
  /**
   * @remarks
   * The user who last updated the version.
   * 
   * @example
   * foo
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the version was last updated.
   * 
   * @example
   * 2020-05-19T06:05:41Z
   */
  updatedDate?: string;
  /**
   * @remarks
   * The name of the version.
   * 
   * @example
   * baz
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      templateFormat: 'TemplateFormat',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      templateFormat: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

