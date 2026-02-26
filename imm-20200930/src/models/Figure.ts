// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Boundary } from "./Boundary";
import { HeadPose } from "./HeadPose";


export class Figure extends $dara.Model {
  /**
   * @remarks
   * The age.
   * 
   * @example
   * 29
   */
  age?: number;
  /**
   * @remarks
   * The standard deviation of the age.
   * 
   * @example
   * 5
   */
  ageSD?: number;
  /**
   * @remarks
   * The face attractiveness. A high score indicates strong attractiveness. Valid values: 0 to 1.
   * 
   * @example
   * 0.96
   */
  attractive?: number;
  /**
   * @remarks
   * Specifies whether the figure has a beard. Valid values:
   * 
   * *   beard
   * *   none
   * 
   * @example
   * none
   */
  beard?: string;
  /**
   * @remarks
   * The confidence level of detecting whether the figure has a beard. Valid values: 0 to 1. The value 0 indicates the lowest confidence level. The value 1 indicates the highest confidence level.
   * 
   * @example
   * 1
   */
  beardConfidence?: number;
  /**
   * @remarks
   * The face boundary information.
   */
  boundary?: Boundary;
  /**
   * @remarks
   * The emotion. Valid values:
   * 
   * *   happiness
   * *   none
   * 
   * @example
   * happiness
   */
  emotion?: string;
  /**
   * @remarks
   * The confidence level of the emotion. Valid values: 0 to 1. The value 0 indicates the lowest confidence level. The value 1 indicates the highest confidence level.
   * 
   * @example
   * 0.707845687866210
   */
  emotionConfidence?: number;
  /**
   * @remarks
   * The face quality.
   * 
   * @example
   * 0.960875928401947
   */
  faceQuality?: number;
  /**
   * @remarks
   * The confidence level of the face clustering task. Valid values: 0 to 1. The value 0 indicates the lowest confidence level. The value 1 indicates the highest confidence level.
   * 
   * @example
   * 1
   */
  figureClusterConfidence?: number;
  /**
   * @remarks
   * The ID of the face clustering task. The following IDs of special face clustering tasks are reserved:
   * 
   * *   figure-cluster-id-independent: the ID of a face clustering task in which faces do not belong to any face group. After images are added to a dataset, the faces may be categorized into different face groups when you perform face clustering.
   * *   figure-cluster-id-unavailable: the ID of a face clustering task in which face clustering is not performed after images are added to a dataset.
   * 
   * @example
   * Cluster-dbe72fec-b84c-4ab6-885b-3678e64****
   */
  figureClusterId?: string;
  /**
   * @remarks
   * The confidence level of the figure. Valid values: 0 to 1. The value 0 indicates the lowest confidence level. The value 1 indicates the highest confidence level.
   * 
   * @example
   * 1
   */
  figureConfidence?: number;
  /**
   * @remarks
   * The figure ID.
   * 
   * @example
   * 868a9e74-cde5-4c7a-9013-28bb984****
   */
  figureId?: string;
  /**
   * @remarks
   * The figure type.
   * 
   * Set this parameter to face.
   * 
   * @example
   * face
   */
  figureType?: string;
  /**
   * @remarks
   * The gender. Valid values:
   * 
   * *   female
   * *   male
   * 
   * @example
   * female
   */
  gender?: string;
  /**
   * @remarks
   * The confidence level of the gender. Valid values: 0 to 1. The value 0 indicates the lowest confidence level. The value 1 indicates the highest confidence level.
   * 
   * @example
   * 1
   */
  genderConfidence?: number;
  /**
   * @remarks
   * Specifies whether the figure wears glasses. Valid values:
   * 
   * *   glasses
   * *   sunglasses
   * *   none
   * 
   * @example
   * none
   */
  glasses?: string;
  /**
   * @remarks
   * The confidence level of detecting whether the figure wears glasses. Valid values: 0 to 1. The value 0 indicates the lowest confidence level. The value 1 indicates the highest confidence level.
   * 
   * @example
   * 0.8
   */
  glassesConfidence?: number;
  /**
   * @remarks
   * Specifies whether the figure wears a hat. Valid values:
   * 
   * *   hat
   * *   none
   * 
   * @example
   * none
   */
  hat?: string;
  /**
   * @remarks
   * The confidence level of detecting whether the figure wears a hat.
   * 
   * @example
   * 1
   */
  hatConfidence?: number;
  /**
   * @remarks
   * The head orientation.
   */
  headPose?: HeadPose;
  /**
   * @remarks
   * Specifies whether the figure wears a mask. Valid values:
   * 
   * *   mask
   * *   none
   * 
   * @example
   * none
   */
  mask?: string;
  /**
   * @remarks
   * The confidence level of detecting whether the figure wears a mask. Valid values: 0 to 1. The value 0 indicates the lowest confidence level. The value 1 indicates the highest confidence level.
   * 
   * @example
   * 1
   */
  maskConfidence?: number;
  /**
   * @remarks
   * Specifies whether the mouth is open. Valid values:
   * 
   * *   open
   * *   close
   * 
   * @example
   * close
   */
  mouth?: string;
  /**
   * @remarks
   * The confidence level of detecting whether the mouth is open. Valid values: 0 to 1. The value 0 indicates the lowest confidence level. The value 1 indicates the highest confidence level.
   * 
   * @example
   * 1
   */
  mouthConfidence?: number;
  /**
   * @remarks
   * The clarity.
   * 
   * @example
   * 0.7
   */
  sharpness?: number;
  static names(): { [key: string]: string } {
    return {
      age: 'Age',
      ageSD: 'AgeSD',
      attractive: 'Attractive',
      beard: 'Beard',
      beardConfidence: 'BeardConfidence',
      boundary: 'Boundary',
      emotion: 'Emotion',
      emotionConfidence: 'EmotionConfidence',
      faceQuality: 'FaceQuality',
      figureClusterConfidence: 'FigureClusterConfidence',
      figureClusterId: 'FigureClusterId',
      figureConfidence: 'FigureConfidence',
      figureId: 'FigureId',
      figureType: 'FigureType',
      gender: 'Gender',
      genderConfidence: 'GenderConfidence',
      glasses: 'Glasses',
      glassesConfidence: 'GlassesConfidence',
      hat: 'Hat',
      hatConfidence: 'HatConfidence',
      headPose: 'HeadPose',
      mask: 'Mask',
      maskConfidence: 'MaskConfidence',
      mouth: 'Mouth',
      mouthConfidence: 'MouthConfidence',
      sharpness: 'Sharpness',
    };
  }

  static types(): { [key: string]: any } {
    return {
      age: 'number',
      ageSD: 'number',
      attractive: 'number',
      beard: 'string',
      beardConfidence: 'number',
      boundary: Boundary,
      emotion: 'string',
      emotionConfidence: 'number',
      faceQuality: 'number',
      figureClusterConfidence: 'number',
      figureClusterId: 'string',
      figureConfidence: 'number',
      figureId: 'string',
      figureType: 'string',
      gender: 'string',
      genderConfidence: 'number',
      glasses: 'string',
      glassesConfidence: 'number',
      hat: 'string',
      hatConfidence: 'number',
      headPose: HeadPose,
      mask: 'string',
      maskConfidence: 'number',
      mouth: 'string',
      mouthConfidence: 'number',
      sharpness: 'number',
    };
  }

  validate() {
    if(this.boundary && typeof (this.boundary as any).validate === 'function') {
      (this.boundary as any).validate();
    }
    if(this.headPose && typeof (this.headPose as any).validate === 'function') {
      (this.headPose as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

