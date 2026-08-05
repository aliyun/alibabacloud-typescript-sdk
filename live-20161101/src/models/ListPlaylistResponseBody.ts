// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPlaylistResponseBodyProgramList extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio to which the playlist belongs. Use this ID as a request parameter to add, delete, modify, or query the layout of a virtual studio.
   * 
   * @example
   * casdfasdfasfdasdflkasjdflaj****
   */
  casterId?: string;
  /**
   * @remarks
   * The streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the playlist.
   * 
   * @example
   * c09f3d63-eacf-4fbf-bd48-a07a6ba7****
   */
  programId?: string;
  /**
   * @remarks
   * The name of the playlist.
   * 
   * @example
   * playlist1
   */
  programName?: string;
  /**
   * @remarks
   * The number of times the playlist repeats after the first playback. Valid values:
   * 
   * - **0** (default): The playlist does not repeat.
   * 
   * - **-1**: The playlist plays in a loop.
   * 
   * - Other positive integers: The number of times the playlist repeats.
   * 
   * @example
   * 1
   */
  repeatNumber?: number;
  /**
   * @remarks
   * The status of the playlist. Valid values:
   * 
   * - **0**: stopped.
   * 
   * - **1**: running.
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
   * The list of playlists.
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
   * The total number of playlists.
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

