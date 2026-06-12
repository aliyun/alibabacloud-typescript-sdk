// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseArtifactRequest extends $dara.Model {
  /**
   * @remarks
   * The artifact ID.
   * 
   * Call [ListArtifacts](https://help.aliyun.com/document_detail/469993.html) to obtain the artifact ID.
   * 
   * This parameter is required.
   * 
   * @example
   * artifact-9feded91880e4c78xxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * A client-generated token that ensures the idempotence of the request. The token must be unique for each request. The value of **ClientToken** can contain only ASCII characters and must be no more than 64 characters in length.
   * 
   * @example
   * 788E7CP0EN9D51P
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

