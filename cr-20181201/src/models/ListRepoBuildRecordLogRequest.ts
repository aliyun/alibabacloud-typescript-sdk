// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoBuildRecordLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image building record.
   * 
   * This parameter is required.
   * 
   * @example
   * C5B4D5D7-A1C6-4E9B-ABD2-401361C4****
   */
  buildRecordId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-nmbv37dlv5d3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The offset of log lines.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * @example
   * crr-z4dvahhku9wv4****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      instanceId: 'InstanceId',
      offset: 'Offset',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      instanceId: 'string',
      offset: 'number',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

