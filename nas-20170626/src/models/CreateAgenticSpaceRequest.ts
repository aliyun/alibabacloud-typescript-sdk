// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgenticSpaceRequestQuota extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  fileCountLimit?: number;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-i
   */
  azone?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @example
   * AgenticSpace Description
   */
  description?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /path/
   */
  fileSystemPath?: string;
  /**
   * @remarks
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

