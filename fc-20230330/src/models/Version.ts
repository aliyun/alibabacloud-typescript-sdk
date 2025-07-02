// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Version extends $dara.Model {
  /**
   * @example
   * 2006-01-02T15:04:05Z07:00
   */
  createdTime?: string;
  /**
   * @example
   * my version
   */
  description?: string;
  /**
   * @example
   * 2006-01-02T15:04:05Z07:00
   */
  lastModifiedTime?: string;
  /**
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

