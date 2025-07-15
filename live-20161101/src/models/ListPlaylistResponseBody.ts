// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPlaylistResponseBodyProgramList extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio to which the episode list belongs. You can use the ID as a request parameter in the API operation that is used to add a layout to the virtual studio, delete a layout in the virtual studio, modify a layout of the virtual studio, or query layouts of the virtual studio.
   * 
   * @example
   * casdfasdfasfdasdflkasjdflaj****
   */
  casterId?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the episode list.
   * 
   * @example
   * c09f3d63-eacf-4fbf-bd48-a07a6ba7****
   */
  programId?: string;
  /**
   * @remarks
   * The name of the episode list.
   * 
   * @example
   * playlist1
   */
  programName?: string;
  /**
   * @remarks
   * The number of playbacks after the first playback is complete. Valid values:
   * 
   * *   **0** (default): specifies that the episode list is played only once.
   * *   **-1**: specifies that the episode list is played in loop mode.
   * *   Positive integer: specifies the number of times the episode list repeats after the first playback is complete.
   * 
   * @example
   * 1
   */
  repeatNumber?: number;
  /**
   * @remarks
   * The status of the episode list. Valid values:
   * 
   * *   **0**: stopped
   * *   **1**: running
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      domainName: 'DomainName',
      programId: 'ProgramId',
      programName: 'ProgramName',
      repeatNumber: 'RepeatNumber',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      domainName: 'string',
      programId: 'string',
      programName: 'string',
      repeatNumber: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlaylistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The episode lists.
   */
  programList?: ListPlaylistResponseBodyProgramList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5c6a2a0d-f228-4a64-af62-20e91b96****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of episode lists returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      programList: 'ProgramList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      programList: { 'type': 'array', 'itemType': ListPlaylistResponseBodyProgramList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.programList)) {
      $dara.Model.validateArray(this.programList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

