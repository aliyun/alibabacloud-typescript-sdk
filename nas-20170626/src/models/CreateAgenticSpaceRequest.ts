// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgenticSpaceRequestQuota extends $dara.Model {
  /**
   * @remarks
   * The maximum number of files allowed by the quota. Valid values:
   * 
   * - Minimum value: 10,000.
   * 
   * - Maximum value: 100,000,000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  fileCountLimit?: number;
  /**
   * @remarks
   * The total capacity limit of the quota. Unit: bytes.
   * 
   * Valid values:
   * 
   * - Minimum value: 10,737,418,240 (10 GiB).
   * - Maximum value: 1,099,511,627,776,000 (1,024,000 GiB).
   * - Step: 1,073,741,824 (1 GiB).
   * 
   * This parameter is required.
   * 
   * @example
   * 10737418240
   */
  sizeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      fileCountLimit: 'FileCountLimit',
      sizeLimit: 'SizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileCountLimit: 'number',
      sizeLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgenticSpaceRequest extends $dara.Model {
  /**
   * @remarks
   * The zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-i
   */
  azone?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, and you must make sure that the value is unique among different requests.
   * 
   * The client token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the Agentic space.
   * 
   * Limits:
   * 
   * - The description must be 2 to 128 characters in length.
   * - It must start with a letter or a Chinese character, and cannot start with `http://` or `https://`.
   * - It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * AgenticSpace Description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on this modification request. A dry run checks the validity of parameters and dependencies without actually modifying the instance or incurring fees.
   * 
   * Valid values:
   * 
   * - true: sends a check request. The protocol service is not modified. The check items include whether required parameters are specified, the request format, and business limits and dependencies. If the check fails, an error is returned. If the check succeeds, the HTTP status code 200 is returned.
   * - false (default): sends a normal request. If the check succeeds, the protocol service is directly modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The absolute path of the file. Only first-level directories are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * /path/
   */
  fileSystemPath?: string;
  /**
   * @remarks
   * The quota information.
   * 
   * This parameter is required.
   */
  quota?: CreateAgenticSpaceRequestQuota;
  static names(): { [key: string]: string } {
    return {
      azone: 'Azone',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      fileSystemPath: 'FileSystemPath',
      quota: 'Quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azone: 'string',
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
      fileSystemPath: 'string',
      quota: CreateAgenticSpaceRequestQuota,
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

