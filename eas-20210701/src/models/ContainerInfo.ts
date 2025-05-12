// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContainerInfo extends $dara.Model {
  currentReaon?: string;
  currentStatus?: string;
  currentTimestamp?: string;
  image?: string;
  lastReason?: string;
  lastStatus?: string;
  lastTimestamp?: string;
  name?: string;
  port?: number;
  ready?: boolean;
  restartCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentReaon: 'CurrentReaon',
      currentStatus: 'CurrentStatus',
      currentTimestamp: 'CurrentTimestamp',
      image: 'Image',
      lastReason: 'LastReason',
      lastStatus: 'LastStatus',
      lastTimestamp: 'LastTimestamp',
      name: 'Name',
      port: 'Port',
      ready: 'Ready',
      restartCount: 'RestartCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentReaon: 'string',
      currentStatus: 'string',
      currentTimestamp: 'string',
      image: 'string',
      lastReason: 'string',
      lastStatus: 'string',
      lastTimestamp: 'string',
      name: 'string',
      port: 'number',
      ready: 'boolean',
      restartCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

