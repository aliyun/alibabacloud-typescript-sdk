// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCodeBundleRequest extends $dara.Model {
  /**
   * @remarks
   * Optional CI/CD metadata JSON, stored as-is on the `code_bundles` row.
   * Used by downstream scan creation for incremental diff, branch tracking, and audit.
   * Typical structure: `{"scan_mode": {"type": "full"|"incremental", "base_ref": "...", "base_commit": "...", "head_commit": "..."},
   * "context": {"repository": "...", "branch": "...", "commit": "...", "pipeline_source": "...", "merge_request_iid": 123, "default_branch": "main"},
   * "client": {"name": "krypton-cli", "version": "0.2.0", "os": "linux", "arch": "amd64"}}`.
   * Backend does not validate internal fields; clients may add arbitrary keys.
   * 
   * @example
   * {"region":"cn-beijing"}
   */
  ciMetadata?: string;
  /**
   * @remarks
   * Original archive file name; used to derive OSS key suffix (e.g. `.zip`, `.tar.gz`).
   * 
   * This parameter is required.
   * 
   * @example
   * test-cases.zip
   */
  filename?: string;
  static names(): { [key: string]: string } {
    return {
      ciMetadata: 'ciMetadata',
      filename: 'filename',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciMetadata: 'string',
      filename: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

