// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeContainerAppVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the created version.
   * 
   * @example
   * ver-87962637161651****
   */
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

