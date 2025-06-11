// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDifyAttributeRequest extends $dara.Model {
  /**
   * @example
   * 92748163-af62-4ca4-ad85-1****
   */
  appUuid?: string;
  /**
   * @example
   * ETnLKlblzczshOTUbOCzxxxx
   */
  clientToken?: string;
  /**
   * @example
   * cn-hangzhou
   */
  dataRegion?: string;
  /**
   * @example
   * 339170706****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appUuid: 'AppUuid',
      clientToken: 'ClientToken',
      dataRegion: 'DataRegion',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUuid: 'string',
      clientToken: 'string',
      dataRegion: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

