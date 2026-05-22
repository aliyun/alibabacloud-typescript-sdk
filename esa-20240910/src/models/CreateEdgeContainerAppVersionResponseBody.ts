// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeContainerAppVersionResponseBody extends $dara.Model {
  requestId?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

