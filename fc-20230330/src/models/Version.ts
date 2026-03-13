// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Version extends $dara.Model {
  /**
   * @remarks
   * The time when the version was created.
   * 
   * @example
   * 2006-01-02T15:04:05Z07:00
   */
  createdTime?: string;
  /**
   * @remarks
   * The description of the layer version.
   * 
   * @example
   * my version
   */
  description?: string;
  /**
   * @remarks
   * The time when the version was last updated.
   * 
   * @example
   * 2006-01-02T15:04:05Z07:00
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * 1
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      lastModifiedTime: 'lastModifiedTime',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      lastModifiedTime: 'string',
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

