// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScanSbomExportRequest extends $dara.Model {
  /**
   * @remarks
   * 选填。指定下载落盘的文件名（含扩展名），会签进下载地址的 Content-Disposition。
   * 留空时后端按 `项目名-sbom-<format>.<扩展名>` 生成默认值。
   * 不得含控制字符或路径分隔符（`/`、`\`）、长度不超过 255，否则 → 400 **`InvalidFileName`**。
   * 
   * @example
   * test-sbom-cyclonedx.cdx.json
   */
  fileName?: string;
  /**
   * @remarks
   * 闭合枚举，须是该次扫描 **`artifacts`** 里 **`status=success`** 的 **`artifact_kind`**。
   * 未知值 → 400 **`InvalidArtifactFormat`**，且绝不参与 OSS key 构造。
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

