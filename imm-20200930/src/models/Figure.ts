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
   * The age standard deviation.
   * 
   * @example
   * 5
   */
  ageSD?: number;
  /**
   * @remarks
   * The face attractiveness score. A higher score indicates greater attractiveness. Valid values: 0 to 1.
   * 
   * @example
   * 0.96
   */
  attractive?: number;
  /**
   * @remarks
   * Indicates whether the person has a beard.
   * 
   * @example
   * none
   */
  beard?: string;
  /**
   * @remarks
   * The confidence score for whether the person has a beard. Valid values: 0 (lowest confidence) to 1 (highest confidence).
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
   * The emotion.
   * 
   * @example
   * happiness
   */
  emotion?: string;
  /**
   * @remarks
   * The emotion confidence score. Valid values: 0 (lowest confidence) to 1 (highest confidence).
   * 
   * @example
   * 0.707845687866210
   */
  emotionConfidence?: number;
  /**
   * @remarks
   * The face quality score, which evaluates whether the image quality is suitable for face recognition. A higher score indicates better quality. Valid values: 0 to 1.
   * 
   * @example
   * 0.960875928401947
   */
  faceQuality?: number;
  /**
   * @remarks
   * The clustering confidence score. Valid values: 0 (lowest confidence) to 1 (highest confidence).
   * 
   * @example
   * 1
   */
  figureClusterConfidence?: number;
  /**
   * @remarks
   * The figure cluster ID. The following reserved special cluster ID names are included:
   * 
   * - figure-cluster-id-independent: The face does not currently belong to any suitable group. After new images are added to the dataset and face clustering is performed, the face may be assigned to a group.
   * 
   * - figure-cluster-id-unavailable: The face has not been clustered yet. This means that after new images were added to the dataset, face clustering has not been performed.
   * 
   * @example
   * Cluster-dbe72fec-b84c-4ab6-885b-3678e64****
   */
  figureClusterId?: string;
  /**
   * @remarks
   * The confidence score of the figure object. Valid values: 0 (lowest confidence) to 1 (highest confidence).
   * 
   * @example
   * 1
   */
  figureConfidence?: number;
  /**
   * @remarks
   * The ID of the figure object.
   * 
   * @example
   * 868a9e74-cde5-4c7a-9013-28bb984****
   */
  figureId?: string;
  /**
   * @remarks
   * The figure type.
   * 
   * @example
   * face
   */
  figureType?: string;
  /**
   * @remarks
   * The gender.
   * 
   * @example
   * female
   */
  gender?: string;
  /**
   * @remarks
   * The gender confidence score. Valid values: 0 (lowest confidence) to 1 (highest confidence).
   * 
   * @example
   * 1
   */
  genderConfidence?: number;
  /**
   * @remarks
   * Indicates whether the person is wearing glasses.
   * 
   * @example
   * none
   */
  glasses?: string;
  /**
   * @remarks
   * The confidence score for whether the person is wearing glasses. Valid values: 0 (lowest confidence) to 1 (highest confidence).
   * 
   * @example
   * 0.8
   */
  glassesConfidence?: number;
  /**
   * @remarks
   * Indicates whether the person is wearing a hat.
   * 
   * @example
   * none
   */
  hat?: string;
  /**
   * @remarks
   * The confidence score for whether the person is wearing a hat. Valid values: 0 (lowest confidence) to 1 (highest confidence).
   * 
   * @example
   * 1
   */
  hatConfidence?: number;
  /**
   * @remarks
   * The head pose information.
   */
  headPose?: HeadPose;
  /**
   * @remarks
   * Indicates whether the person is wearing a mask.
   * 
   * @example
   * none
   */
  mask?: string;
  /**
   * @remarks
   * The confidence score for whether the person is wearing a mask. Valid values: 0 (lowest confidence) to 1 (highest confidence).
   * 
   * @example
   * 1
   */
  maskConfidence?: number;
  /**
   * @remarks
   * Indicates whether the mouth is open.
   * 
   * @example
   * close
   */
  mouth?: string;
  /**
   * @remarks
   * The confidence score for whether the mouth is open. Valid values: 0 (lowest confidence) to 1 (highest confidence).
   * 
   * @example
   * 1
   */
  mouthConfidence?: number;
  /**
   * @remarks
   * The sharpness score. A higher score indicates a clearer face. Valid values: 0 to 1.
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

