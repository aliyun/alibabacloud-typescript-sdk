// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagsResponseBodyTagsTagResourceTypeCount extends $dara.Model {
  /**
   * @remarks
   * The number of dedicated hosts to which the tag is added.
   * 
   * @example
   * 1
   */
  ddh?: number;
  /**
   * @remarks
   * The number of disks to which the tag is added.
   * 
   * @example
   * 15
   */
  disk?: number;
  /**
   * @remarks
   * The number of ENIs to which the tag is added.
   * 
   * @example
   * 5
   */
  eni?: number;
  /**
   * @remarks
   * The number of images to which the tag is added.
   * 
   * @example
   * 6
   */
  image?: number;
  /**
   * @remarks
   * The number of instances to which the tag is added.
   * 
   * @example
   * 45
   */
  instance?: number;
  /**
   * @remarks
   * The number of key pairs to which the tag is added.
   * 
   * @example
   * 17
   */
  keyPair?: number;
  /**
   * @remarks
   * The number of launch templates to which the tag is added.
   * 
   * @example
   * 6
   */
  launchTemplate?: number;
  /**
   * @remarks
   * The number of reserved instances to which the tag is added.
   * 
   * @example
   * 4
   */
  reservedInstance?: number;
  /**
   * @remarks
   * The number of security groups to which the tag is added.
   * 
   * @example
   * 4
   */
  securitygroup?: number;
  /**
   * @remarks
   * The number of snapshots to which the tag is added.
   * 
   * @example
   * 15
   */
  snapshot?: number;
  /**
   * @remarks
   * The number of automatic snapshot policies to which the tag is added.
   * 
   * @example
   * 4
   */
  snapshotPolicy?: number;
  /**
   * @remarks
   * The number of storage volumes to which the tag is added.
   * 
   * @example
   * 6
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      ddh: 'Ddh',
      disk: 'Disk',
      eni: 'Eni',
      image: 'Image',
      instance: 'Instance',
      keyPair: 'KeyPair',
      launchTemplate: 'LaunchTemplate',
      reservedInstance: 'ReservedInstance',
      securitygroup: 'Securitygroup',
      snapshot: 'Snapshot',
      snapshotPolicy: 'SnapshotPolicy',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddh: 'number',
      disk: 'number',
      eni: 'number',
      image: 'number',
      instance: 'number',
      keyPair: 'number',
      launchTemplate: 'number',
      reservedInstance: 'number',
      securitygroup: 'number',
      snapshot: 'number',
      snapshotPolicy: 'number',
      volume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

