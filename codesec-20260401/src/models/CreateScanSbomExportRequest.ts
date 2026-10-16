// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScanSbomExportRequest extends $dara.Model {
  /**
   * @remarks
   * The file name (including the extension) for the downloaded file. The file name is signed into the Content-Disposition header of the URL. If you leave this parameter empty, the backend generates a file name in the format of project name-sbom-<format>.<extension>. If the file name contains control characters or path separators (/ or \\), or if the length exceeds 255 characters, a 400 InvalidFileName error is returned.
   * 
   * @example
   * test-sbom-cyclonedx.cdx.json
   */
  fileName?: string;
  /**
   * @remarks
   * Valid values:
   * * cyclonedx-json
   * * spdx-json
   * 
   * This parameter is required.
   * 
   * @example
   * cyclonedx-json
   */
  format?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      format: 'format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      format: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

