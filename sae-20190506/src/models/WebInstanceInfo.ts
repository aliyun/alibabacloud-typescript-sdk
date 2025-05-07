// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebInstanceInfo extends $dara.Model {
  imageUrl?: string;
  /**
   * @example
   * c-66691780-1522405d-3021e147e0c3
   */
  instanceId?: string;
  status?: string;
  /**
   * @example
   * 1
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      status: 'Status',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      instanceId: 'string',
      status: 'string',
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

