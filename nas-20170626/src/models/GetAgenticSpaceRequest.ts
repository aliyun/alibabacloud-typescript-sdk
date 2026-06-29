// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgenticSpaceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agentic-229oypxjgpau2****
   */
  agenticSpaceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 06229oypxjgox0u****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      agenticSpaceId: 'AgenticSpaceId',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agenticSpaceId: 'string',
      fileSystemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

