// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateMigrationJobRequestMigrationJobList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  destination?: string;
  destinationIp?: string;
  destinationRegion?: string;
  jobGmtCreate?: string;
  jobGmtModified?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  originalPercent?: string;
  originalProgress?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  originalStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outSideId?: string;
  properties?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  source?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      destination: 'destination',
      destinationIp: 'destinationIp',
      destinationRegion: 'destinationRegion',
      jobGmtCreate: 'jobGmtCreate',
      jobGmtModified: 'jobGmtModified',
      name: 'name',
      originalPercent: 'originalPercent',
      originalProgress: 'originalProgress',
      originalStatus: 'originalStatus',
      outSideId: 'outSideId',
      properties: 'properties',
      source: 'source',
      sourceIp: 'sourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destination: 'string',
      destinationIp: 'string',
      destinationRegion: 'string',
      jobGmtCreate: 'string',
      jobGmtModified: 'string',
      name: 'string',
      originalPercent: 'string',
      originalProgress: 'string',
      originalStatus: 'string',
      outSideId: 'string',
      properties: 'string',
      source: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

