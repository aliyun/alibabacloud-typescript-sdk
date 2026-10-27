// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloneVoiceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number to return. Defaults to 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Defaults to 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the cloned voice.
   * 
   * @example
   * Published
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

