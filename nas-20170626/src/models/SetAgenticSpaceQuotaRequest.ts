// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAgenticSpaceQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agentic-229oypxjgpau2****
   */
  agenticSpaceId?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @example
   * 10000
   */
  fileCountLimit?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @example
   * 10737418240
   */
  sizeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      agenticSpaceId: 'AgenticSpaceId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      fileCountLimit: 'FileCountLimit',
      fileSystemId: 'FileSystemId',
      sizeLimit: 'SizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agenticSpaceId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      fileCountLimit: 'number',
      fileSystemId: 'string',
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

